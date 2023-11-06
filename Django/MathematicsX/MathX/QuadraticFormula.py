import random
import cmath

def generate_quad_function():
    aint = random.randint(1, 10)
    bint = random.randint(-10, 10)
    cint = random.randint(-10, 10)

    D = random.randint(1, 12) ** 2
    diskriminants = (bint**2) - (4*aint*cint)


    if D == diskriminants and cmath.sqrt(D).real.is_integer():

        print(f"Quadratic function: {aint}x^2 + {bint}x + {cint} = 0; aprēķini x vērtības")
        print("ja vienādojumam ir 1 sakne atbildi ievadi divas reizes")

        user_input_1 = float(input("x1 = "))
        user_input_2 = float(input("x2 = "))

        risin1 = (-bint-cmath.sqrt(diskriminants))/(2*aint)
        risin2 = (-bint+cmath.sqrt(diskriminants))/(2*aint)

        if isinstance(risin1, complex):
            x = abs(risin1.real) * -1 if risin1.real < 0 else abs(risin1.real)
        else:
            x = abs(risin1) * -1 if risin1 < 0 else abs(risin1)
        if isinstance(risin2, complex):
            y = abs(risin2.real) * -1 if risin2.real < 0 else abs(risin2.real)
        else:
            y = abs(risin2) * -1 if risin2 < 0 else abs(risin2)

        x = round(x, 2)
        y = round(y, 2)

        risin1 = x
        risin2 = y

        if (user_input_1 == risin1 and user_input_2 == risin2) or (user_input_1 == risin2 and user_input_2 == risin1):
            print(f'Pareizi!! :) x1 = {risin1} x2 = {risin2}')

        else:
                print(f'nepareizi :(, pareizās atbildes bija x1 = {risin1} x2 = {risin2}')

    else:
        generate_quad_function()