from mtgsdk import Set
# from mtgsdk import Card
# from mtgsdk import Type
# from mtgsdk import Supertype
# from mtgsdk import Subtype
# from mtgsdk import Changelog

# Get all Sets
sets = Set.all()
for set in sets:
    print(' ')
    print('Set code: ', set.code)
    print('Set name: ', set.name)
