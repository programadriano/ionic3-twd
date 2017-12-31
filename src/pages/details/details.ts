import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TwdServiceProvider } from "../../providers/twd-service/twd-service";
import { Episode } from "../../models/episode";

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-details",
  templateUrl: "details.html"
})
export class DetailsPage {
  public id;
  public obg: any;
  public episode: Episode;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public twdService: TwdServiceProvider
  ) {
    this.id = navParams.get("id");
    this.episode = new Episode();

    this.twdService.getEpisodeById(this.id).then(data => {
      this.obg = data;
      this.episode.name = this.obg.name;
      this.episode.airdate = this.obg.airdate;
      this.episode.summary = this.obg.summary;
      this.episode.thumb = this.obg.image.original;
      console.log(this.episode);
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetailsPage");
  }
}
