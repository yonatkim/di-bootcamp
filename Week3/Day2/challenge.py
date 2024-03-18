# challenge
print("challenge - pagination")
class Pagination:
    def __init__(self, alphabet_list, page_size) -> None:
        self.alphabet_list = alphabet_list
        self.page_size = page_size
        self.pages = len(alphabet_list) // page_size if (len(alphabet_list) % page_size) == 0 else (len(alphabet_list) // page_size) + 1
        self.last_page = len(alphabet_list) % page_size
        self.page_current = 0

    def getVisibleItems(self):
        to = self.page_current*self.page_size+self.page_size
        return self.alphabet_list[self.page_current*self.page_size:to]
    
    def prevPage(self):
        if self.page_current != 0: self.page_current -= 1
        to = self.page_current*self.page_size+self.page_size
        return self.alphabet_list[self.page_current*self.page_size:to]
    
    def nextPage(self):
        if self.pages != self.page_current: self.page_current += 1
        to = self.page_current*self.page_size+self.page_size
        return self.alphabet_list[self.page_current*self.page_size:to]
    
    def firstPage(self):
        self.page_current = 0
        return self.alphabet_list[self.page_current:self.page_size]
    
    def lastPage(self):
        self.page_current = self.pages - 1
        to = self.page_current*self.page_size+self.last_page
        return self.alphabet_list[self.page_current*self.page_size:to]
    
    def goToPage(self, pageNum):
        if pageNum > self.pages: pageNum = self.pages - 1
        self.page_current = pageNum
        to = self.page_current*self.page_size+self.page_size
        return self.alphabet_list[self.page_current*self.page_size:to]
    

# test cases
alphabet_list = list("abcdefghijklmnopqrstuvwxyz")
print(f"The alphabet:\n {alphabet_list}")
p = Pagination(alphabet_list, 4)
print(f"Get visible page items:\n {p.getVisibleItems()}")
print(f"Get next page:\n {p.nextPage()}")
print(f"Go to page 2:\n {p.goToPage(2)}")
print(f"Go to page 3:\n {p.goToPage(3)}")
print(f"Go to page 4:\n {p.goToPage(4)}")
print(f"Go to page 5:\n {p.goToPage(5)}")
print(f"Go to page 6:\n {p.goToPage(6)}")
print(f"Get the previous page:\n {p.prevPage()}")
print(f"Go to the last page:\n {p.lastPage()}")
print(f"Go to page 1:\n {p.goToPage(1)}")
print(f"Get visible page items:\n {p.getVisibleItems()}")
print(f"Go to the first page:\n {p.firstPage()}")
print(f"Go to page 8:\n {p.goToPage(8)}")