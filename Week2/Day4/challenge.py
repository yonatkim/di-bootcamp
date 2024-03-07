print("challenge 1")
import pandas as pd
from io import StringIO
import re
from functools import reduce

secret = f"\n7ii\nTsx\nh%?\ni #\nsM \n$a \n#t%\n^r!"
print(f"This is the encrypted secret: {secret}")
print()
data = StringIO(secret)
df = pd.read_csv(data, header=None)
print(f"The dataframe:\n {df[0].str.split('', n=len(df[0][1]), expand=True)}")
print()
new = []
for x in df[0]:
    new.append([(x.index(i), i) if i.isalpha() else (x.index(i), '_') for i in x])
decrypted_dict = dict(zip(range(len(new)), new))
decrypted_df = pd.DataFrame(decrypted_dict)
print(f"Decrypted dataframe:\n {decrypted_df.values}")
print()
filter = re.compile(r"(?<=\')([a-zA-Z]*?)(?=\')") #(.*?)
found = []
for col in decrypted_df.values:
    found.append(re.findall(filter, str(col)))
print(f"Reduced data list:\n The secret revealed!\n 🤫 {''.join(reduce(lambda x,y: x+y, found))}")


