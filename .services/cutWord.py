# -*- coding: utf-8 -*-
# encoding=utf-8

import jieba
import sys
from collections import Counter
import re

def apply(text,topN):

	seg_list = jieba.cut(text)
	seg_list = filter(minLength, seg_list);
	# print("Result: \n" + "\n".join(seg_list)) 
	return calcWordFreq(seg_list, 3)

def minLength(x): return len(x) >= 2


def calcWordFreq(wordList, topN):

	blacklist_file = open("blacklist.txt",'r')
	blacklist = re.split('[\s\ \\,\;\.\!\n]+', blacklist_file.read())

	# print "黑名单", blacklist
	wordFreq = {}
	for word in wordList:
		if (word in wordFreq) and (not (word.encode('utf-8') in blacklist)):
			wordFreq[word] = wordFreq[word] + 1
		else:
			wordFreq[word] = 1
	count = Counter(wordFreq)
	return count.most_common()[:topN]

