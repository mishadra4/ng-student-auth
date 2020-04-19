import {Component, OnInit} from '@angular/core';
import {LectureService} from '../_services/lecture.service';
import {SubjectService} from '../_services/subject.service';
import {LabService} from '../_services/lab.service';
import {ActivatedRoute} from '@angular/router';
import {Lab} from '../_models/lab';
import {backendUrl} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {

  labs: Map<number, Lab[]> = new Map<number, Lab[]>();
  values: IterableIterator<Lab[]>;
  subjectId: string;

  constructor(private lectureService: LectureService, private subjectService: SubjectService,
              private labService: LabService, private route: ActivatedRoute, private httClient: HttpClient) {
  }

  ngOnInit() {
    this.route.parent.paramMap
      .subscribe(params => {
        let subjectId = params.get('subjectId');
        this.subjectId = subjectId;
        this.getLabs(subjectId);
      });
  }


  getLabs(subjectId) {
    this.subjectService.getSubject(subjectId).subscribe(data => {
      let groupIds = data.groups.map(group => group.id);
      for (let id of groupIds) {
        this.labService.getLabsBySubject(subjectId, id)
          .subscribe(labsData => {
            labsData.sort((a, b) => a.name < b.name ? -1 : 1);
            this.labs.set(1, labsData);
            this.values = this.labs.values();
          });
      }
    });
  }

  getValues() {
    return this.labs.get(1);
  }

  generateReport() {
    this.httClient.get(backendUrl + 'app/report/labs/subject/' + this.subjectId,  {responseType: 'blob'})
      .subscribe(data => saveAs(data, this.subjectId + '_ЗВІТ_ЛАБОРАТОРНІ.xlsx'));
  }

}
