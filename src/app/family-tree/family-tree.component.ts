import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface FamilyMember {
  name: string;
  spouse?: string;
  children?: FamilyMember[];
}

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})
export class FamilyTreeComponent {
  treeControl = new NestedTreeControl<FamilyMember>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FamilyMember>();

  constructor() {
    // You can directly assign ancestors for the tree data source
    this.dataSource.data = bakshiParivar.ancestors;
  }

  hasChild = (_: number, node: FamilyMember) => !!node.children && node.children.length > 0;
}

// This can be imported from another file if needed
const bakshiParivar = {
  name: 'Bakshi Parivar',
  description: 'A family of Bakshis',
  ancestors: [
    {
      name: 'Late Champalalji Bakshi',
      spouse: 'Late Jethi Bai',
      image: 'assets/images/champalalji.jpg',
      children: [
        {
          name: 'Late ManakChandji Bakshi*',
          spouse: 'Kamla Devi',
          image: 'assets/images/maa-1.jpg',
          children: [
            {
              name: 'Chandrakanta Sethia*',
              spouse: 'Late Swami Anand Prem',
              image: 'assets/images/bhuaasa.jpg',
              children: [
                {
                  name: 'Ashok Prem*',
                  spouse: 'Mukta Jain',
                  image: 'assets/images/ashok.jpg',
                  children: [
                    { name: 'Juhi Jain', image: 'assets/images/juhi.jpg' },
                    { name: 'Pulkit Jain', image: 'assets/images/tinku.jpg' }
                  ]
                },
                {
                  name: 'Arvind Prem*',
                  spouse: 'Trishla Sethia',
                  image: 'assets/images/babloo.jpg',
                  children: [
                    { name: 'Aayush Sethia', image: 'assets/images/aayush.jpg' },
                    { name: 'Lakshay Sethia', image: 'assets/images/lakshay.jpg' }
                  ]
                }
              ]
            },
            {
              name: 'Late Lalit Kumar Bakshi*',
              spouse: 'Suman Jain',
              image: 'assets/images/lalit.jpg',
              children: [
                {
                  name: 'Rishabh Kumar Bakshi*',
                  spouse: 'Apurva Jain',
                  image: 'assets/images/rishabh.jpg',
                  children: [
                    { name: 'Khwaab Jain', image: 'assets/images/khwaab.jpg' },
                    { name: 'Aprisha Jain', image: 'assets/images/aprisha.jpg' }
                  ]
                },
                {
                  name: 'Shilpi Pugalia*',
                  spouse: 'Nitin Pugalia',
                  image: 'assets/images/shilpi.jpg',
                  children: []
                }
              ]
            },
            {
              name: 'Manju Chordia*',
              spouse: 'Sunil Chordia',
              image: 'assets/images/manju.jpg',
              children: [
                {
                  name: 'Priyanka Surana*',
                  spouse: 'Nishant Surana',
                  image: 'assets/images/tina.jpg',
                  children: [
                    { name: 'Vihan Surana', image: 'assets/images/tina-2.jpg', },
                    { name: 'Anay Surana', image: 'assets/images/tina-1.jpg', }
                  ]
                },
                {
                  name: 'Prateek Chordia*',
                  spouse: 'Nikita Chordia',
                  image: 'assets/images/rinku.jpg',
                  children: [
                    { name: 'Yaashi Chordia', image: 'assets/images/rinku-2.jpg', },
                    { name: 'Dishi Chordia', image: 'assets/images/rinku-1.jpg', }
                  ]
                }
              ]
            },
            {
              name: 'Suman Sand*',
              spouse: 'Sunil Sand',
              image: 'assets/images/suman.jpg',
              children: [
                {
                  name: 'Pratibha Khabiya*',
                  spouse: 'Ajit Khabiya',
                  image: 'assets/images/dimple.jpg',
                  children: [
                    { name: 'Ayaansh Khabiya', image: 'assets/images/ayaansh.jpg' }
                  ]
                },
                {
                  name: 'Nidhi Bhadani*',
                  spouse: 'Pankaj Bhadani',
                  image: 'assets/images/nidhi.jpg',
                  children: [
                    { name: 'Lehak Jain', image: 'assets/images/nidhi-1.jpg' }
                  ]
                },
                { name: 'Shreya Jain', image: 'assets/images/shreya.jpg' },
                { name: 'Shraddha Jain', image: 'assets/images/shraddha.jpg' }
              ]
            },
            {
              name: 'Kusum Kankariya*',
              spouse: 'Pukhraj Kankariya',
              image: 'assets/images/kusum.jpg',
              children: [
                { name: 'Virendra Kankariya', image: 'assets/images/viru.jpg' },
                { name: 'Pawan Kankariya', image: 'assets/images/charli.jpg' }
              ]
            },
            {
              name: 'Vandana Jain*',
              spouse: 'Sachindra Singhvi',
              image: 'assets/images/vandana.jpg',
              children: [
                { name: 'Ankit Singhvi', image: 'assets/images/ankit.jpg' },
                { name: 'Swati Singhvi', image: 'assets/images/swati.jpg' }
              ]
            },
            {
              name: 'Vijay Kumar Bakshi*',
              spouse: 'Nidhi Jain',
              image: 'assets/images/vijay.jpg',
              children: [
                { name: 'Poorva Jain', image: 'assets/images/poorva.jpg' },
                { name: 'Kaushal Jain', image: 'assets/images/kaushal.jpg' }
              ]
            },
            {
              name: 'Jaishri Jain*',
              spouse: 'Sudhir Kumbhat',
              image: 'assets/images/gudiya.jpg',
              children: [
                { name: 'Nischal Kumbhat Jain', image: 'assets/images/nischal.jpg' },
                { name: 'Chaitanya Kumbhat Jain', image: 'assets/images/gungun.jpg' }
              ]
            }
          ]
        },
        {
          name: 'Late Dhanraj Bakshi*',
          spouse: 'Late Pushpa Devi',
          image: 'assets/images/dhanraj.jpg',
          children: [
            {
              name: 'Buddhi Prakash Bakshi*',
              spouse: 'Hansa Bakshi',
              image: 'assets/images/manu.jpg',
              children: [
                {
                  name: 'Chandani Babel*',
                  spouse: 'Deepak Babel',
                  image: 'assets/images/chandani.jpg',
                  children: [
                    { name: 'Divit Babel', image: 'assets/images/chandani-1.jpg' },
                    { name: 'Kalp Babel', image: 'assets/images/chandani-2.jpg' }
                  ]
                },
                { name: 'Pratik Bakshi', image: 'assets/images/vivek.jpg' },
                { name: 'Himani Bakshi', image: 'assets/images/himani.jpg' }
              ]
            },
            {
              name: 'Saroj Doshi*',
              spouse: 'Ashok Doshi',
              image: 'assets/images/Ashokji.jpg',
              children: [
                {
                  name: 'Khushbu Burad*',
                  spouse: 'Punit Burad',
                  image: 'assets/images/khushbu-borunda.jpg',
                  children: [
                    { name: 'Prisha Burad', image: 'assets/images/khushbu-borunda1.jpg' }
                  ]
                },
                {
                  name: 'Sarika Karnawat*',
                  spouse: 'Raunak Karnawat',
                  image: 'assets/images/Ghotu.jpg',
                  children: []
                },
                { name: 'Arihant Doshi', image: 'assets/images/Arihant.jpg' },
              ]
            },
            {
              name: 'Sunita Lalwani*',
              spouse: 'Kamal Lalwani',
              image: 'assets/images/babybhuaa.jpg',
              children: [
                {
                  name: 'Khushbu Kothari*',
                  spouse: 'Rishabh Kothari',
                  image: 'assets/images/khushbu-nagaur.jpg',
                  children: [
                    { name: 'Ritvi Kothari', image: 'assets/images/khushbu-nagaur-1.jpg' }
                  ]
                },
                {
                  name: 'Kavita Chaudhary*',
                  spouse: 'Arvind Chaudhary',
                  image: 'assets/images/kavita.jpg',
                  children: [
                    { name: 'Khushan Chaudhary', image: 'assets/images/kavita-1.jpg' },
                    { name: 'Soham Chaudhary', image: 'assets/images/kavita-2.jpg' }
                  ]
                },
                {
                  name: 'Kalpana Bafna*',
                  spouse: 'Vaibhav Bafna',
                  image: 'assets/images/vaibhav.jpg',
                  children: [
                    { name: 'Bhavika Bafna', image: 'assets/images/vaibhav-1.jpg' }
                  ]
                },
                { name: 'Harshit Lalwani', image: 'assets/images/harshit.jpg' }
              ]
            },
            {
              name: 'Sangeeta Nahar*',
              spouse: 'Kishor Nahar',
              image: 'assets/images/kishor.jpg',
              children: [
                {
                  name: 'Nikita Bhansali*',
                  spouse: 'Pravesh Bhansali',
                  image: 'assets/images/nikita.jpg',
                  children: [
                    { name: 'Garvisha Bhansali', image: 'assets/images/nikita-1.jpg' }
                  ]
                },
                { name: 'Ankita Nahar', image: 'assets/images/ankita.jpg' }
              ]
            }
          ]
        },
        {
          name: 'Late Luni Bai*',
          spouse: 'Late Poonam Chand Banthiya',
          children: []
        },
        {
          name: 'Late Gulab Bai*',
          spouse: 'Late Pratap Chand Pugalia',
          children: []
        }
      ]
    }
  ]
};
