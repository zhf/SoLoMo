# Recommendation service

## Endpoint

`POST /api/recommendation`

## Sample Payload

Provide characters for the matching target and candidates:

```javascript
{
	"matching": ["meteor", "哈工大", "java"],
	"candidates": [
		["meteor", "哈工大", "java"],
		["any_string", "not_me", "和兴小学", "盟科时代"],
		["angular", "meteor", "哈理工"],
		["react", "meteor", "哈工大"],
		["react-native", "ruby on rails", "哈尔滨", "java"],
		["typescript", "哈工大", "哈尔滨", "北京"]
	]
}
```

## Response

Sorted recommendations by rank (count of matched characters).

```javascript
[
  {
    "intersec": [
      "哈工大",
      "java",
      "meteor"
    ],
    "dtags": [
      "meteor",
      "哈工大",
      "java"
    ],
    "rank": 3
  },
  {
    "intersec": [
      "哈工大",
      "meteor"
    ],
    "dtags": [
      "react",
      "meteor",
      "哈工大"
    ],
    "rank": 2
  },
  {
    "intersec": [
      "meteor"
    ],
    "dtags": [
      "angular",
      "meteor",
      "哈理工"
    ],
    "rank": 1
  },
  {
    "intersec": [
      "java"
    ],
    "dtags": [
      "react-native",
      "ruby on rails",
      "哈尔滨",
      "java"
    ],
    "rank": 1
  },
  {
    "intersec": [
      "哈工大"
    ],
    "dtags": [
      "typescript",
      "哈工大",
      "哈尔滨",
      "北京"
    ],
    "rank": 1
  },
  {
    "intersec": [],
    "dtags": [
      "any_string",
      "not_me",
      "和兴小学",
      "盟科时代"
    ],
    "rank": 0
  }
]
```
# CutWords  service

## Endpoint

`POST /api/cutWords`

## Sample  

 

```javascript
{
	"topN": 3,
	"data": France 中欧关系，中国，France，美国，中国，中国
}
```

## Response

 

```javascript
[
  [
    "中国",
    3
  ],
  [
    "France",
    2
  ],
  [
    "关系",
    1
  ]
]
```
