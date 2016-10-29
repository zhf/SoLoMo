//
//  ListViewController.m
//  SoLoMo-iOSClicent
//
//  Created by Xiaodong Jiang on 29/10/2016.
//  Copyright © 2016 StarCore. All rights reserved.
//
@import CoreData;
#import "AppDelegate.h"
#import "ListViewController.h"

@interface ListViewController () <UITableViewDataSource,UITableViewDelegate>

@property (strong, nonatomic) UITableView *tableView;
@property (strong, nonatomic) NSArray *dataSource;

@end

@implementation ListViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    [self.view addSubview:self.tableView];
    [self setUp];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

#pragma mark - Data Management

- (void)setUp {
    AppDelegate *appDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    METCollection *players = [appDelegate.client.database collectionWithName:@"users"];
    self.dataSource = [players allDocuments];
    [self.tableView reloadData];
}

#pragma mark - Table view data source

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section{
    return [self.dataSource count];;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{
    static NSString *CELL = @"CELL";
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CELL];
    if(cell == nil){
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleValue2 reuseIdentifier:CELL];
    }
    METDocument *document = self.dataSource[indexPath.row];
    NSDictionary *d = document.fields;
    [cell.imageView sd_setImageWithURL:[NSURL URLWithString:d[@"avatarUrl"]]];
    cell.textLabel.text = d[@"username"];
    cell.detailTextLabel.text = d[@"intro"];
    cell.accessoryType = UITableViewCellAccessoryDisclosureIndicator;
    cell.selectionStyle = UITableViewCellSelectionStyleNone;
    return cell;
}

#pragma mark - Table view delegate

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath{
    
}

#pragma mark - getter and setter

- (UITableView *) tableView {
    if (!_tableView) {
        _tableView = [[UITableView alloc] initWithFrame:CGRectMake(0.0, 0.0, SCREEN_WIDTH,SCREEN_HEIGHT - NAVIGATIONBARHEIGHT - TABBARHEIGHT - 40.0)
                                                  style:UITableViewStylePlain];
        _tableView.backgroundView = nil;
        _tableView.backgroundColor = [UIColor whiteColor];
        _tableView.delegate = self;
        _tableView.dataSource = self;
        _tableView.rowHeight = 70;
        _tableView.separatorStyle = UITableViewCellSeparatorStyleSingleLine;
        [_tableView setTableFooterView:[[UIView alloc] initWithFrame:CGRectZero]];
    }
    return _tableView;
}

@end
