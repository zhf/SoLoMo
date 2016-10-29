# -*- coding: utf-8 -*-
# encoding=utf-8

import jieba
import sys
from collections import Counter
import re
import jieba.posseg as pseg

def apply(text,topN): 
	seg_list = jieba.cut(text)
	seg_list = filter(minLength, seg_list);
	# print("Result: \n" + "\n".join(seg_list))
	return calcWordFreq(seg_list, topN)

def applyParallel(text,topN):
	# 开启并行分词模式，参数为并行进程数
	jieba.enable_parallel(4) 
	# jieba.disable_parallel() 
	seg_list = []
	words = pseg.cut(text)
	for word, flag in words:
		print word,flag
		if flag=="n":
			seg_list.append(word)
	print("Result: \n" + "\n".join(seg_list))
	return calcWordFreq(seg_list, topN)
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

