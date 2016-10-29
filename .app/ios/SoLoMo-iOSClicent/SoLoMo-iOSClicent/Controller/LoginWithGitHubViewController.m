//
//  LoginWithGitHubViewController.m
//  SoLoMo-iOSClicent
//
//  Created by Xiaodong Jiang on 29/10/2016.
//  Copyright © 2016 StarCore. All rights reserved.
//

#import "LoginWithGitHubViewController.h"
#import "GitHubOAuthController.h"
#import "AppDelegate.h"

@interface LoginWithGitHubViewController ()

@end

@implementation LoginWithGitHubViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    UIButton *oAuthButton = [[UIButton alloc] init];
    [self.view addSubview:oAuthButton];
    [oAuthButton setTitleColor:DEFAULTCOLOR forState:UIControlStateNormal];
    [oAuthButton addTarget:self action:@selector(actionStartTraditional) forControlEvents:UIControlEventTouchUpInside];
    [oAuthButton setTitle:@"Login With GitHub" forState:UIControlStateNormal];
    // Layout
    oAuthButton.frame = ({
        CGRect frame;
        frame.origin.y = 200;
        frame.origin.x = 0;
        frame.size.width = self.view.bounds.size.width;
        frame.size.height = 50;
        frame;
    });
    oAuthButton.autoresizingMask = UIViewAutoresizingFlexibleWidth;
    UIImageView *gitHubImageView = [[UIImageView alloc] initWithFrame:CGRectMake((SCREEN_WIDTH - 100.0)/2, 100.0, 100.0, 100.0)];
    gitHubImageView.image = [UIImage imageNamed:@"GitHub"];
    [self.view addSubview:gitHubImageView];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)actionStartTraditional {
    GitHubOAuthController *oAuthController = [[GitHubOAuthController alloc] initWithClientId:kClientId
                                                                                clientSecret:kClientSecret
                                                                                       scope:kScope
                                                                                     success:^(NSString *accessToken, NSDictionary *raw) {
    AppDelegate *appDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    [appDelegate.client callMethodWithName:@"github:auth" parameters:@[accessToken]];
    } failure:nil];
    [oAuthController showModalFromController:self];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
