import itertools
import random
import pickle
import time
 
# c = club d = diamond h = heart s = spade
SUITS = ('c', 'd', 'h', 's')
RANKS = ('2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A')
 
DECK = tuple(''.join(card) for card in itertools.product(RANKS, SUITS))
 
SUIT_LOOKUP = dict(zip(SUITS, range(4)))
RANK_LOOKUP = dict(zip(RANKS, range(13)))
ORDER_LOOKUP = dict(zip(DECK, range(52)))

 
# card utilities
class Card:
    def __init__(self) -> None:
        pass

    def cmp_cards(self, a, b):
        return bool(ORDER_LOOKUP[a] > ORDER_LOOKUP[b]) - bool(ORDER_LOOKUP[a] < ORDER_LOOKUP[b])
        
    def cmp_tuples(self, a, b):
        n1 = len(a)
        n2 = len(b)
        if n1 != n2:
            return bool(n1 > n2) - bool (n1 < n2)
        return bool(a > b) - bool (a < b)
    
    def suit(self, card):
        return card[1]
        
    def suit_int(self, card):
        return SUIT_LOOKUP[card[1]]
        
    def rank(self, card):
        return card[0]
        
    def rank_int(self, card):
        return RANK_LOOKUP[card[0]]
        
    def card_int(self, card):
        s = 1 << self.suit_int(card)
        r = self.rank_int(card)
        c = (s << 4) | r
        return c
    
# deck functionality
class Deck:
    def __init__(self) -> None:
            pass

    def is_straight(self, c, cards):
        previous = c.rank_int(cards[0]) - 1
        for card in cards:
            r = c.rank_int(card)
            if r != previous + 1:
                if not (r == 12 and previous == 3):
                    return False
            previous = r
        return True
        
    def is_flush(self, c, cards):
        s = c.suit(cards[0])
        return all(c.suit(card) == s for card in cards)
        
    def same_rank(self, c, cards):
        r = c.rank(cards[0])
        return all(c.rank(card) == r for card in cards)
        
    def split_ranks(self, c, cards, indexes):
        for index in indexes:
            a, b = cards[:index], cards[index:]
            if self.same_rank(c, a) and self.same_rank(c, b):
                return True
        return False
        
    def is_full_house(self, c, cards):
        return self.split_ranks(c, cards, (2, 3))
        
    def is_four(self, c, cards):
        return self.split_ranks(c, cards, (1, 4))
        
    def is_pat(self, c, cards):
        return c.is_straight(cards) or c.is_flush(cards) or c.is_full_house(cards) or c.is_four(cards)
        
    def is_straight_flush(self, c, cards):
        return c.is_straight(cards) and c.is_flush(cards)
        
    def rank_count(self, c, cards):
        result = {}
        for card in cards:
            r = c.rank_int(card)
            result[r] = result.get(r, 0) + 1
        return result
        
    def is_three(self, c, cards, counts=None):
        counts = counts or c.rank_count(cards)
        for rank, count in counts.items():
            if count == 3:
                return True
        return False
        
    def is_two_pair(self, c, cards, counts=None):
        pairs = 0
        counts = counts or c.rank_count(cards)
        for rank, count in counts.items():
            if count == 2:
                pairs += 1
        return pairs == 2
        
    def is_pair(self, c, cards, counts=None):
        counts = counts or c.rank_count(cards)
        for rank, count in counts.items():
            if count == 2:
                return True
        return False
        
    def get_ranks(self, counts):
        values = [(count, rank) for rank, count in counts.items()]
        values.sort(reverse=True)
        values = [n[1] for n in values]
        return values
        
    def get_straight_rank(self, c, cards):
        top = c.rank_int(cards[-1])
        bottom = c.rank_int(cards[0])
        if top == 12 and bottom == 0:
            return 3
        return top
    
    def evaluate_hand(self, c, cards):
        flush = self.is_flush(c, cards)
        straight = self.is_straight(c, cards)
        counts = self.rank_count(c, cards)
        ranks = self.get_ranks(counts)
        print("Rank ♠️♦️♥️♣️↙️")
        if straight:
            ranks = [self.get_straight_rank(c, cards)]
            print(f"straight rank {ranks}")
        if straight and flush:
            value = 9
            print("straight flush")
        elif self.is_four(c, cards):
            value = 8
            print("four of a kind")
        elif self.is_full_house(c, cards):
            value = 7
            print("full house")
        elif flush:
            value = 6
            print("flash")
        elif straight:
            value = 5
            print("straight")
        elif self.is_three(c, cards, counts):
            value = 4
            print("three of a kind")
        elif self.is_two_pair(c, cards, counts):
            value = 3
            print("two pairs")
        elif self.is_pair(c, cards, counts):
            value = 2
            print("pair")
        else:
            value = 1
            print("high card")
        ranks.insert(0, value)
        return tuple(ranks)

# test cases
print()
hand = [random.choice(list(DECK)) for n in range(5)]
print(f"Random hand: {hand}")
c = Card()
d = Deck()
print(f"Results: {d.evaluate_hand(c, hand)}")

