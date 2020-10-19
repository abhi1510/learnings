import numpy as np
import matplotlib.pyplot as plt
from tkinter import *

root = Tk()
root.title('Databases')
root.geometry('400x300')

def plot():
    h_prices = np.random.normal(8000000, 25000, 5000)
    plt.hist(h_prices, 200)
    plt.show()

Button(root, text="Show Plot", command=plot).pack()

root.mainloop()