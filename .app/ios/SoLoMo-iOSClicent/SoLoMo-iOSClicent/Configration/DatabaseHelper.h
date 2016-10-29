//
//  DatabaseHelper.h
//  SoLoMo-iOSClicent
//
//  Created by Xiaodong Jiang on 29/10/2016.
//  Copyright © 2016 StarCore. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <YTKKeyValueStore.h>

@interface DatabaseHelper : NSObject

- (YTKKeyValueStore *) store;

@end
