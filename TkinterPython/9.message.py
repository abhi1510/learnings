from tkinter import *
from tkinter import messagebox

root = Tk()

response = StringVar()

def popup():
    res = messagebox.showinfo('popup title', 'This is Info popup')
    response.set(str(res))
    res = messagebox.showwarning('popup title', 'This is Warning popup')
    response.set(str(res))
    res = messagebox.showerror('popup title', 'This is Error popup')
    response.set(str(res))
    res = messagebox.askquestion('popup title', 'This is Question popup')
    response.set(str(res))
    res = messagebox.askokcancel('popup title', 'This is Ok/Cancel popup')
    response.set(str(res))
    res = messagebox.askyesno('popup title', 'This is Yes/No popup')
    response.set(str(res))
    res = messagebox.askyesnocancel('popup title', 'This is Yes/No/Cancel popup')
    response.set(str(res))

Button(root, text='Info Popup', command=popup, padx=5, pady=5).grid(row=0, column=0)
Label(root, textvariable=response).grid(row=2, column=0)

root.mainloop()