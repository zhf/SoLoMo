//
//  AccountHelper.m
//  SoLoMo-iOSClicent
//
//  Created by Xiaodong Jiang on 29/10/2016.
//  Copyright © 2016 StarCore. All rights reserved.
//

#import "AccountHelper.h"

@implementation AccountHelper

+ (void) saveAccountTokenWithToken : (NSString *) token{
    if (!token || token.length == 0) {
        token = @"0";
    }
    [[NSUserDefaults standardUserDefaults] setObject:token forKey:@"token"];
    [[NSUserDefaults standardUserDefaults] synchronize];
}

+ (void) deleteAccountInfo{
    [[NSUserDefaults standardUserDefaults] removeObjectForKey:@"token"];
    [[NSUserDefaults standardUserDefaults] synchronize];
}

@end
