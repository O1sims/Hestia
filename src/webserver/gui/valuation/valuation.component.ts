import { Component, OnInit } from '@angular/core';

import { ValuationService } from './valuation.service';
import { SharedService } from '../shared/shared.service';


@Component({
  templateUrl: './valuation/valuation.component.html',
  providers: [ValuationService, SharedService]
})

export class ValuationComponent {
  heatingChoices:string[] = [
    "economy 7",
    "gas",
    "oil"
  ]

  propertyStyleChoices:string[] = [
    "apartment",
    "bungalow",
    "detached house",
    "end-terrace house",
    "semi-detached house",
    "terrace house",
    "townhouse"
  ]

  postcodeChoices:string[] = [
    "BT1", "BT2", "BT3", "BT4", "BT5",
    "BT6", "BT7", "BT8", "BT9", "BT10",
    "BT11", "BT12", "BT13", "BT14",
    "BT15", "BT16", "BT17", "BT18",
    "BT28", "BT36", "BT37"
  ]

  bedrooms:number = 1;

  garden:boolean = false;
  driveway:boolean = false;
  garage:boolean = false;
  bayWindow:boolean = false;

  heating:string = this.heatingChoices[0];
  postcode:string = this.postcodeChoices[0];
  propertyStyle:string = this.propertyStyleChoices[0];

  estimatedValue:number;

  constructor(
    private sharedService: SharedService,
    private valuationService: ValuationService) {};

  setFeature(event, feature) {
    if (feature=="heating") {
      this.heating = event['target']['value'];
    } else if (feature=="propertyStyle") {
      this.propertyStyle = event['target']['value'];
    } else if (feature=="postcode") {
      this.postcode = event['target']['value'];
    } else if (feature=="bedrooms") {
      this.bedrooms = event['target']['value'];
    };
  };

  setAmenityBool(amenity) {
    if (amenity=="garage") {
      this.garage = !this.garage;
    } else if (amenity=="driveway") {
      this.driveway = !this.driveway;
    } else if (amenity=="garden") {
      this.garden = !this.garden;
    } else if (amenity=="bayWindow") {
      this.bayWindow = !this.bayWindow;
    }
  };

  estimatePropertyValue() {
    var propertyData = {
      "postcode": this.postcode,
      "details": {
        "bedrooms": Number(this.bedrooms),
        "style": this.propertyStyle,
        "heating": this.heating,
        "amenities": {
          "garage": this.garage,
          "garden": this.garden,
          "driveway": this.driveway,
          "bayWindow": this.bayWindow
        }
      }
    };
    this.valuationService.propertyValuation(propertyData)
    .subscribe(valuation => {
      this.estimatedValue = this.sharedService.cleanPropertyPrice(
        'pound', valuation['estimatedPrice'].toFixed(2));
    });

  }

}
