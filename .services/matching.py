# -*- coding: utf-8 -*-
# encoding=utf-8
 
def match(coders,me):
	friends = []

	for coder in coders:
		intersec = list(set(me).intersection(coder))
		rank = len(intersec)
		friends.append(dict(rank = rank, intersec = intersec, dtags = coder))

	return sorted(friends, key=lambda k: k['rank'], reverse=True)
