//
//  DatabaseHelper.m
//  SoLoMo-iOSClicent
//
//  Created by Xiaodong Jiang on 29/10/2016.
//  Copyright © 2016 StarCore. All rights reserved.
//

#import "DatabaseHelper.h"
#import "Config.h"

@implementation DatabaseHelper

- (YTKKeyValueStore *) store {
    return [[YTKKeyValueStore alloc] initDBWithName:DATABASENAME];
}

@end
