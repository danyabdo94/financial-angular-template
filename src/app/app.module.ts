import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material.module";
import { AppComponent } from "./components/app/app.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SalesStatisticsComponent } from "./components/sales-statistics/sales-statistics.component";
import { StockTrendsComponent } from "./components/stock-trends/stock-trends.component";
import { PerformanceComponent } from "./components/performance/performance.component";
import { RatioAnalysisComponent } from "./components/ratio-analysis/ratio-analysis.component";
import { ConsumedBudgetComponent } from "./components/consumed-budget/consumed-budget.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    SalesStatisticsComponent,
    StockTrendsComponent,
    ConsumedBudgetComponent,
    PerformanceComponent,
    RatioAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
