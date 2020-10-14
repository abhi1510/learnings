from tkinter import *

root = Tk()
root.title('Checkbox')
root.geometry('400x400')

pizza = StringVar()
# pizza.set('Cheese Burst')

# Checkbutton(root, text='Option 1', variable=pizza).pack()
c = Checkbutton(root, text='Option 1', variable=pizza, onvalue='On', offvalue='Off')
c.deselect()
c.pack()

def show():
    Label(root, text=pizza.get()).pack()

Button(root, text='Show Selection', command=show).pack()

root.mainloop()