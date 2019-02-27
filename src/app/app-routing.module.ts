import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from 'src/app/videos/videos.component';
import { ChannelsComponent } from 'src/app/channels/channels.component';
import { DetalleVideoComponent } from 'src/app/detalle-video/detalle-video.component';
import { DetalleCanalComponent } from 'src/app/detalle-canal/detalle-canal.component';
const routes: Routes = [
  { path: 'videos', component: VideosComponent },
  { path: 'channels', component: ChannelsComponent },
  { path: 'videos/:id', component: DetalleVideoComponent},
  { path: 'channels/:id', component: DetalleCanalComponent},
  { path: '**', redirectTo: '/videos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
