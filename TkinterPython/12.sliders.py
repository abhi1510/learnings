from tkinter import *
from tkinter import filedialog
from PIL import ImageTk, Image

root = Tk()

def open():
    global img
    root.filename= filedialog.askopenfilename(initialdir='assets', title='Select file', filetypes=(('all files', '*.*'),))
    img = ImageTk.PhotoImage(Image.open(root.filename))
    Label(image=img).pack()

Button(root, text='open file', command=open).pack(padx=20, pady=20)

root.mainloop()