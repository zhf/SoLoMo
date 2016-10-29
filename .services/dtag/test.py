# -*- coding: utf-8 -*-
# encoding=utf-8

import jieba
import sys
from collections import Counter
import re

if len(sys.argv) == 1:
	sys.exit("Missing argument")

input_file = open(sys.argv[1],'r')
text = input_file.read()

blacklist_file = open(sys.argv[2],'r')
blacklist = re.split('[\s\ \\,\;\.\!\n]+', blacklist_file.read())

print "黑名单", blacklist

def minLength(x): return len(x) >= 2

seg_list = jieba.cut(text)
seg_list = filter(minLength, seg_list);

print("Result: \n" + "\n".join(seg_list)) 

def calcWordFreq(wordList, topN):
	wordFreq = {}
	for word in wordList:
		if (word in wordFreq) and (not (word.encode('utf-8') in blacklist)):
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
