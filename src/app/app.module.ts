import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { VideosComponent } from './videos/videos.component';
import { ChannelsComponent } from './channels/channels.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { FiltroNombrePipe } from './filtro-nombre.pipe';
import { DetalleVideoComponent } from './detalle-video/detalle-video.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    VideosComponent,
    ChannelsComponent,
    PlaylistsComponent,
    FiltroNombrePipe,
    DetalleVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
