//
//  SharedDatabaseHelper.h
//  SoLoMo-iOSClicent
//
//  Created by Xiaodong Jiang on 29/10/2016.
//  Copyright © 2016 StarCore. All rights reserved.
//

#import <Foundation/Foundation.h>

#define CURRENTUSERTALBE @"currentUserTalbe"

@interface SharedDatabaseHelper : NSObject

+ (instancetype) sharedDatabaseHelper;

/**
 *  清理和当前用户相关的数据表
 */
- (void) clearAllCurrentUserDatabase;

@end
