//
//  UIConfig.h
//  SoLoMo-iOSClicent
//
//  Created by Xiaodong Jiang on 29/10/2016.
//  Copyright © 2016 StarCore. All rights reserved.
//

#import <Foundation/Foundation.h>

#define DEFAULTCOLOR [UIColor colorWithRed:0.29 green:0.56 blue:0.89 alpha:1.00]
#define DEFAULTGRAYCOLOR [UIColor colorWithRed:(191/255.0) green:(191/255.0) blue:(191/255.0) alpha:1.0]
#define DEFAULTTEXTCOLOR [UIColor colorWithRed:(100/255.0) green:(100/255.0) blue:(100/255.0) alpha:1.0] 
#define DEFAULTLIGHTGRAYCOLOR [UIColor colorWithRed:0.98 green:0.98 blue:0.98 alpha:1]

#define DEFAULFONT [UIFont systemFontOfSize:14.0]
#define DEFAULNAVIGATIONBARFONT [UIFont systemFontOfSize:17.0]

#define SYSTEMVERSION [[[UIDevice currentDevice] systemVersion] floatValue]

#define COLOR(R,G,B) [UIColor colorWithRed:(R)/255.0 green:(G)/255.0 blue:(B)/255.0 alpha:1]

#define IS_IPAD (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPad)
#define IS_IPHONE (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPhone)
#define IS_RETINA ([[UIScreen mainScreen] scale] >= 2.0)

#define SCREEN_WIDTH ([[UIScreen mainScreen] bounds].size.width)
#define SCREEN_HEIGHT ([[UIScreen mainScreen] bounds].size.height)
#define SCREEN_MAX_LENGTH (MAX(SCREEN_WIDTH, SCREEN_HEIGHT))
#define SCREEN_MIN_LENGTH (MIN(SCREEN_WIDTH, SCREEN_HEIGHT))

#define IS_IPHONE_4_OR_LESS (IS_IPHONE && SCREEN_MAX_LENGTH < 568.0)
#define IS_IPHONE_5 (IS_IPHONE && SCREEN_MAX_LENGTH == 568.0)
#define IS_IPHONE_6 (IS_IPHONE && SCREEN_MAX_LENGTH == 667.0)
#define IS_IPHONE_6P (IS_IPHONE && SCREEN_MAX_LENGTH == 736.0)

#define NAVIGATIONBARHEIGHT 64.0
#define TABBARHEIGHT 49.0
#define SEARCHBARHEIGHT 44.0
#define STATUSBARHEIGHT 20.0

#define WEAKSELF typeof(self) __weak weakSelf = self;

#define ISSIMULATOR (NSNotFound != [[[UIDevice currentDevice] model] rangeOfString:@"Simulator"].location)

@interface UIConfig : NSObject

@end
