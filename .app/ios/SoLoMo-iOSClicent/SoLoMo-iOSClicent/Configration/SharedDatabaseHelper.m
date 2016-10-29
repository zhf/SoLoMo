//
//  SharedDatabaseHelper.m
//  SoLoMo-iOSClicent
//
//  Created by Xiaodong Jiang on 29/10/2016.
//  Copyright © 2016 StarCore. All rights reserved.
//

#import "SharedDatabaseHelper.h"
#import "Config.h"
#import <YTKKeyValueStore.h>

@implementation SharedDatabaseHelper

static SharedDatabaseHelper* sharedDatabaseHelper = nil;

+ (instancetype) sharedDatabaseHelper{
    static dispatch_once_t onceToken ;
    dispatch_once(&onceToken, ^{
        sharedDatabaseHelper = [[self alloc] init] ;
    }) ;
    return sharedDatabaseHelper ;
}

- (instancetype)init{
    self = [super init];
    if (self) {
        YTKKeyValueStore *store = [[YTKKeyValueStore alloc] initDBWithName:DATABASENAME];
        [store createTableWithName:CURRENTUSERTALBE];
    }
    return self;
}

- (void)clearAllCurrentUserDatabase{
    YTKKeyValueStore *store = [[YTKKeyValueStore alloc] initDBWithName:DATABASENAME];
    [store clearTable:CURRENTUSERTALBE];
}

@end
