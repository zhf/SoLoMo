# A Simple recommendation service

## Endpoint

`POST /recommendation`

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
{
  ["rank": 3, "intersec": [...]],
  ["rank": 3, "intersec": [...]],
  ["rank": 2, "intersec": [...]],
  ["rank": 1, "intersec": [...]],
  ["rank": 0, "intersec": [...]],
}
```
