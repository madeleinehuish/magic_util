# this can easily be pushed to a file to create a javascript object

from mtgsdk import Card, Set

# sets = Set.all()
# print('export default [')
# for set in sets:
#     print('{ set: "')
#     print(set.code)
#     print('", setName: "')
#     print(set.name)
#     print('"},')
#
# print(']')

# Get all Sets

# Get all cards
ixalan_cards = Card.where(set='XLN').all()
# rivals_cards = Card.where(set='RIX').all()
# dominaria_cards = Card.where(set='DOM').all()
# m19_cards = Card.where(set='M19').all()
# ravnica_cards = Card.where(set='GRN').all()


print('Ixalan Cards: ', len(ixalan_cards))
# print('Rivals Cards: ', len(rivals_cards))
# print('Dominaria Cards: ', len(dominaria_cards))
# print('M19 Cards: ', len(m19_cards))
# print('Guilds of Ravnica Cards: ', len(ravnica_cards))
