import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from 'src/app/videos/videos.component';
import { ChannelsComponent } from 'src/app/channels/channels.component';
import { PlaylistsComponent } from 'src/app/playlists/playlists.component';
const routes: Routes = [
  { path: 'videos', component: VideosComponent },
  { path: 'channels', component: ChannelsComponent },
  { path: 'playlists', component: PlaylistsComponent },
  { path: '**', redirectTo: '/videos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
