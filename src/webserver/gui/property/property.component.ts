import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PropertyService } from './property.service';
import { SharedService } from '../shared/shared.service';


@Component({
  templateUrl: './property/property.component.html',
  providers: [PropertyService, SharedService]
})

export class PropertyComponent implements OnInit {
  propertyDetail:object;
  valuationLabel:string;

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private propertyService: PropertyService) {};

  ngOnInit() {
    var propertyData = this.route.params.subscribe(params => {
       this.propertyService.getPropertyDetails(params['id'])
       .subscribe(
         propertyDetail => {
           propertyDetail['price'] = this.sharedService.cleanPropertyPrice(
             propertyDetail['priceInfo']['currency'],
             propertyDetail['priceInfo']['price'])
           this.propertyDetail = propertyDetail;
           this.checkPriceImperfection(propertyDetail);
         }
       );
    });
  };

  checkPriceImperfection(propertyData) {
    var formattedPropertyData = {
      "givenPrice": propertyData['priceInfo']['price'],
      "propertyInfo": {
        "postcode": propertyData["postcode"],
        "details": {
          "bedrooms": Number(propertyData["details"]["bedrooms"]),
          "style": propertyData["details"]["style"],
          "heating": propertyData["details"]["heating"],
          "amenities": {
            "garage": propertyData["details"]["amenities"]["garage"],
            "garden": propertyData["details"]["amenities"]["garden"],
            "driveway": propertyData["details"]["amenities"]["driveway"],
            "bayWindow": propertyData["details"]["amenities"]["bayWindow"]
          }
        }
      }
    }
    this.propertyService.priceImperfection(formattedPropertyData)
    .subscribe(
      priceImperfectionCheck => {
        console.log(priceImperfectionCheck);
        this.valuationLabel = priceImperfectionCheck['differential']['label'];
      }
    );
  };

}
