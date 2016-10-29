# -*- coding: utf-8 -*-
# encoding=utf-8

import jieba
import sys
from collections import Counter

if len(sys.argv) == 1:
	sys.exit("Missing argument")

file = open(sys.argv[1],'r')
text = file.read()

def minLength(x): return len(x) >= 2

seg_list = jieba.cut(text)
seg_list = filter(minLength, seg_list);

print("Result: \n" + "\n".join(seg_list)) 

def calcWordFreq(wordList, topN):
	wordFreq = {}
	for word in wordList:
		if word in wordFreq:
			wordFreq[word] = wordFreq[word] + 1
		else:
			wordFreq[word] = 1
	count = Counter(wordFreq)
	return count.most_common()[:topN]

topWords = calcWordFreq(seg_list, 3)

print "========"
for word, count in topWords:
	# u = unicode(word, 'unicode-escape')
	print word, count
#print calcWordFreq(seg_list, 3)
