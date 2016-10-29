# -*- coding: utf-8 -*-
# encoding=utf-8

coders = []
coders.append(["meteor", "哈工大", "java"])
coders.append(["any_string", "not_me", "和兴小学", "盟科时代"])
coders.append(["angular", "meteor", "哈理工"])
coders.append(["react", "meteor", "哈工大"])
coders.append(["react-native", "ruby on rails", "哈尔滨", "java"])
coders.append(["typescript", "哈工大", "哈尔滨", "北京"])

me = ["meteor", "哈工大", "java"];

friends = []

for coder in coders:
	intersec = list(set(me).intersection(coder))
	rank = len(intersec)
	friends.append(dict(rank = rank, intersec = intersec, dtags = coder))

ranked = sorted(friends, key=lambda k: k['rank'], reverse=True) 

print "Rank", "\t", "Intersection"
for item in ranked:
	print item['rank'], "\t", item['intersec']
