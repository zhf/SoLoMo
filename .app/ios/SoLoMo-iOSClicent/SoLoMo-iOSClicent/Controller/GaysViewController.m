//
//  GaysViewController.m
//  SoLoMo-iOSClicent
//
//  Created by Xiaodong Jiang on 29/10/2016.
//  Copyright © 2016 StarCore. All rights reserved.
//

#import "GaysViewController.h"
#import "MapViewController.h"
#import "ListViewController.h"
#import <WMPageController.h>

@interface GaysViewController ()

@property (nonatomic, strong) WMPageController *pageViewController;

@end

@implementation GaysViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.title = @"GAYS";
    [self configController];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/
- (void)configController{
    NSMutableArray *viewControllers = [[NSMutableArray alloc] initWithCapacity:1];
    NSMutableArray *titles = [[NSMutableArray alloc] initWithCapacity:1];
    [viewControllers addObject:[MapViewController class]];
    [titles addObject:@"MAP"];
    [viewControllers addObject:[ListViewController class]];
    [titles addObject:@"LIST"];
    self.pageViewController = [[WMPageController alloc] initWithViewControllerClasses:viewControllers
                                                                       andTheirTitles:titles];
    self.pageViewController.edgesForExtendedLayout = UIRectEdgeNone;
    self.pageViewController.scrollEnable = NO;
    self.pageViewController.menuViewStyle = WMMenuViewStyleLine;
    self.pageViewController.pageAnimatable = YES;
    self.pageViewController.menuItemWidth = 85;
    self.pageViewController.titleColorSelected = DEFAULTCOLOR;
    self.pageViewController.titleColorNormal = DEFAULTTEXTCOLOR;
    self.pageViewController.titleSizeNormal = 10;
    self.pageViewController.titleSizeSelected = 14;
    self.pageViewController.menuHeight = 40;
    self.pageViewController.menuBGColor = DEFAULTLIGHTGRAYCOLOR;
    [self addChildViewController:self.pageViewController];
    [self.view addSubview:self.pageViewController.view];
}


@end
