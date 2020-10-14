from tkinter import *
from tkinter import filedialog, messagebox

root = Tk()
root.title('Sliders')
root.geometry('400x400')

vertical = Scale(root, from_=0, to=400)
vertical.pack()

horizontal = Scale(root, from_=0, to=400, orient=HORIZONTAL)
horizontal.pack()

def resize():
    if vertical.get() > 200 and horizontal.get() > 200:
        root.geometry(f'{horizontal.get()}x{vertical.get()}')
    else:
        messagebox.showwarning('Warning', 'Window must be greater than 200x200')

Button(root, text='resize window', command=resize).pack()

root.mainloop()