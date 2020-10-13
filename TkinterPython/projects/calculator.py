from tkinter import *

root = Tk()
root.title('Simple Calculator')

# display widget
entry = Entry(root, width=40, borderwidth=5)
entry.grid(row=0, column=0, columnspan=3, padx=10, pady=10)

# handlers
def num_click(num):
    current = entry.get()
    entry.delete(0, END)
    entry.insert(0, str(current) + str(num))

def clear():
    entry.delete(0, END)

def add():
    global operand1
    operand1 = int(entry.get())
    entry.delete(0, END)

def equals():
    op2 = entry.get()
    entry.delete(0, END)
    entry.insert(0, operand1 + int(op2))


# buttons widget
btn1 = Button(root, text='1', padx=40, pady=15, command=lambda: num_click(1))
btn2 = Button(root, text='2', padx=40, pady=15, command=lambda: num_click(2))
btn3 = Button(root, text='3', padx=40, pady=15, command=lambda: num_click(3))
btn4 = Button(root, text='4', padx=40, pady=15, command=lambda: num_click(4))
btn5 = Button(root, text='5', padx=40, pady=15, command=lambda: num_click(5))
btn6 = Button(root, text='6', padx=40, pady=15, command=lambda: num_click(6))
btn7 = Button(root, text='7', padx=40, pady=15, command=lambda: num_click(7))
btn8 = Button(root, text='8', padx=40, pady=15, command=lambda: num_click(8))
btn9 = Button(root, text='9', padx=40, pady=15, command=lambda: num_click(9))
btn0 = Button(root, text='0', padx=40, pady=15, command=lambda: num_click(0))

btn_add = Button(root, text='+', padx=39, pady=15, command=add)
btn_equal = Button(root, text='=', padx=91, pady=15, command=equals)
btn_clear = Button(root, text='Clear', padx=79, pady=15, command=clear)

# show buttons
btn1.grid(row=3, column=0)
btn2.grid(row=3, column=1)
btn3.grid(row=3, column=2)

btn4.grid(row=2, column=0)
btn5.grid(row=2, column=1)
btn6.grid(row=2, column=2)

btn7.grid(row=1, column=0)
btn8.grid(row=1, column=1)
btn9.grid(row=1, column=2)

btn0.grid(row=4, column=0)
btn_add.grid(row=5, column=0)
btn_equal.grid(row=5, column=1, columnspan=2)
btn_clear.grid(row=4, column=1, columnspan=2)

root.mainloop()