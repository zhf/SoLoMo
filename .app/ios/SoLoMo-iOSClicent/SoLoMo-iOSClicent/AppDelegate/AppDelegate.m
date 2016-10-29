//
//  AppDelegate.m
//  SoLoMo-iOSClicent
//
//  Created by Xiaodong Jiang on 29/10/2016.
//  Copyright © 2016 StarCore. All rights reserved.
//

#import "AppDelegate.h"

#import "UIConfig.h"
#import "BaseNavigationController.h"
#import "BaseViewController.h"
#import "ChatsViewController.h"
#import "GroupsViewController.h"
#import "GaysViewController.h"
#import "ProfileViewController.h"
#import "Config.h"
#import "SharedDatabaseHelper.h"
#import "AccountManager.h"
#import "LoginWithGitHubViewController.h"
#import <BaiduMapAPI_Base/BMKBaseComponent.h>//引入base相关所有的头文件

@interface AppDelegate (){
    BMKMapManager* _mapManager;
}

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    [self configUI];
    [self config];
    [self configMeteor];
    return YES;
}


- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


- (void)application:(UIApplication*)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData*)deviceToken{
    NSString *pushToken = [[[[deviceToken description]
                             stringByReplacingOccurrencesOfString:@"<" withString:@""]
                            stringByReplacingOccurrencesOfString:@">" withString:@""]
                           stringByReplacingOccurrencesOfString:@" " withString:@""] ;
    NSLog(@"stringToken:%@",pushToken);
    if (pushToken && pushToken.length) {
        
    }else{
        pushToken = @"0";
    }
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
    NSLog(@"Registfail%@",error);
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo{
    // 处理推送消息
    NSLog(@"userinfo:%@",userInfo);
}

#pragma mark - UI Config
#pragma mark -

- (void)configUI{
    
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    self.window.backgroundColor = [UIColor whiteColor];
    
    [[UINavigationBar appearance] setTintColor:[UIColor whiteColor]];
    [[UINavigationBar appearance] setBarTintColor:DEFAULTCOLOR];
    [[UINavigationBar appearance] setTitleTextAttributes:@{NSForegroundColorAttributeName : [UIColor whiteColor],
                                                           NSFontAttributeName : DEFAULNAVIGATIONBARFONT}];
    
    [[UITabBarItem appearance] setTitleTextAttributes:@{NSForegroundColorAttributeName : DEFAULTCOLOR } forState:UIControlStateSelected];
    [[UITabBarItem appearance] setTitleTextAttributes:@{NSForegroundColorAttributeName : DEFAULTGRAYCOLOR } forState:UIControlStateNormal];
    
    self.tabBarController = [[UITabBarController alloc] init];
    self.tabBarController.tabBar.translucent = NO;
    
    BaseNavigationController* chatsViewController = [[BaseNavigationController alloc] initWithRootViewController:[[ChatsViewController alloc] init]];
    BaseNavigationController* groupsViewController = [[BaseNavigationController alloc] initWithRootViewController:[[GroupsViewController alloc] init]];
    BaseNavigationController* gaysViewController = [[BaseNavigationController alloc] initWithRootViewController:[[GaysViewController alloc] init]];
    BaseNavigationController* profileViewController = [[BaseNavigationController alloc] initWithRootViewController:[[ProfileViewController alloc] init]];
    
    NSArray* controllers = @[chatsViewController,groupsViewController,gaysViewController,profileViewController];
    self.tabBarController.viewControllers = controllers;
    
    UITabBar *tabBar = self.tabBarController.tabBar;
    UITabBarItem *tabBarItem0 = [tabBar.items objectAtIndex:0];
    UITabBarItem *tabBarItem1 = [tabBar.items objectAtIndex:1];
    UITabBarItem *tabBarItem2 = [tabBar.items objectAtIndex:2];
    UITabBarItem *tabBarItem3 = [tabBar.items objectAtIndex:3];
    
    tabBarItem0.title = @"CHATS";
    tabBarItem0.titlePositionAdjustment = UIOffsetMake(0.0, -2.0);
    tabBarItem0.image = [[UIImage imageNamed:@"tabbar_chats_unselect"] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal ];
    tabBarItem0.selectedImage = [[UIImage imageNamed:@"tabbar_chats_selected"] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal ];
    
    tabBarItem1.title = @"GROUPS";
    tabBarItem1.titlePositionAdjustment = UIOffsetMake(0.0, -2.0);
    tabBarItem1.image = [[UIImage imageNamed:@"tabbar_groups_unselect"] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal ];
    tabBarItem1.selectedImage = [[UIImage imageNamed:@"tabbar_groups_selected"] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal ];
    
    tabBarItem2.title = @"GAYS";
    tabBarItem2.titlePositionAdjustment = UIOffsetMake(0.0, -2.0);
    tabBarItem2.image = [[UIImage imageNamed:@"tabbar_gays_unselect"] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal ];
    tabBarItem2.selectedImage = [[UIImage imageNamed:@"tabbar_gays_selected"] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal ];
    
    tabBarItem3.title = @"PROFILE";
    tabBarItem3.titlePositionAdjustment = UIOffsetMake(0.0, -2.0);
    tabBarItem3.image = [[UIImage imageNamed:@"tarbar_profile_unselect"] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal ];
    tabBarItem3.selectedImage = [[UIImage imageNamed:@"tarbar_profile_selected"] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal ];
    
    self.tabBarController.selectedIndex = 0;
    [self setupRootViewController];
    [self.window makeKeyAndVisible];
}

#pragma mark - Meteor Config
#pragma mark -

- (void) configMeteor {
    self.client = [[METDDPClient alloc] initWithServerURL:[NSURL URLWithString:BASEURL]];
    [self.client connect];
    [self.client addSubscriptionWithName:@"users:all"
                                     parameters:nil
                              completionHandler:^(NSError *error) {
                                  
                              }];
}

#pragma mark - APP Config
#pragma mark -

- (void) config{
    
    /*!
     *  设置图片缓存默认大小200M,图片缓存时间为7天
     */
    SDImageCache *imageCache = [SDImageCache sharedImageCache];
    [imageCache setMaxCacheSize:1024*1024*200];
    /**
     *  初始化数据库
     */
    SharedDatabaseHelper *sharedDatabaseHelper = [SharedDatabaseHelper sharedDatabaseHelper];
    NSLog(@"%@",[sharedDatabaseHelper description]);
    
    // 要使用百度地图，请先启动BaiduMapManager
    _mapManager = [[BMKMapManager alloc]init];
    // 如果要关注网络及授权验证事件，请设定     generalDelegate参数
    BOOL ret = [_mapManager start:@"kcsvr0AsuBdAZ7dE1o5jEBBZWpqRpeiw"  generalDelegate:nil];
    if (!ret) {
        NSLog(@"manager start failed!");
    }
}

- (void)setupRootViewController{
    self.window.rootViewController = self.tabBarController;
/*
    if ([[AccountManager sharedAccountManager] getCurrentUser]) {
        self.window.rootViewController = self.tabBarController;
    }else{
        self.window.rootViewController = [[BaseNavigationController alloc]
                                          initWithRootViewController:[[LoginWithGitHubViewController alloc] init]];
    }
*/
}

@end
