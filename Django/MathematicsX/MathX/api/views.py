from django.http import JsonResponse
from QuadraticFormula import generate_quad_function



def quadratic_results(request):
    risin1 = 42
    risin2 = 24
    # risin1, risin2 = generate_quad_function()


    data = {
        'risin1': risin1,
        'risin2': risin2,


    }

    return JsonResponse(data)