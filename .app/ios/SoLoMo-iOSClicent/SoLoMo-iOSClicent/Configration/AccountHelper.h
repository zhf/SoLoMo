//
//  AccountHelper.h
//  SoLoMo-iOSClicent
//
//  Created by Xiaodong Jiang on 29/10/2016.
//  Copyright © 2016 StarCore. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface AccountHelper : NSObject

+ (void) saveAccountTokenWithToken : (NSString *) token;
+ (void) deleteAccountInfo;

@end
