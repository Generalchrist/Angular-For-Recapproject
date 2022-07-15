import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { CarimageComponent } from './components/carimage/carimage.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', component: CarComponent },
  { path: "cars", component: CarComponent },
  { path: "cardetails/:carId", component: CarDetailComponent },
  { path: "cars/brand/:brandId", component: CarComponent },
  { path: "cars/color/:colorId", component: CarComponent },
  { path: "cars/carimages/:carId", component: CarimageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
