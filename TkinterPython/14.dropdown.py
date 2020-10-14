from tkinter import *

root = Tk()
root.title('Dropdown')
root.geometry('400x400')

selection = StringVar()

# selection.set('Mon')
# drop = OptionMenu(root, selection, 'Mon', 'Tues', 'Wed', 'Thu', 'Fri')
# drop.pack()

options = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri']
selection.set(options[0])
drop = OptionMenu(root, selection, *options)
drop.pack()


root.mainloop()