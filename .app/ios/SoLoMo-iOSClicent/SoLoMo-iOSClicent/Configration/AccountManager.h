//
//  AccountManager.h
//  SoLoMo-iOSClicent
//
//  Created by Xiaodong Jiang on 29/10/2016.
//  Copyright © 2016 StarCore. All rights reserved.
//

#import <Foundation/Foundation.h>

@class User;

@interface AccountManager : NSObject

@property (nonatomic, strong) User *user;

+ (instancetype)sharedAccountManager;

- (void) setCurrentUser : (NSDictionary *) userInfo;

- (User *) getCurrentUser;

- (void) userLogout;

- (void) updateCurrentUserInfoWithDictionary : (NSDictionary *) updateUserInfo;

@end
