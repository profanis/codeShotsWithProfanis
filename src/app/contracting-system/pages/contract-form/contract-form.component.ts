import { Component, computed, inject, signal } from '@angular/core';
import { ProjectOverviewComponent } from '../../components/project-overview/project-overview.component';
import { ClientInformationComponent } from '../../components/client-information/client-information.component';
import { ContractorInformationComponent } from '../../components/contractor-information/contractor-information.component';
import { ScopeOfWorkComponent } from '../../components/scope-of-work/scope-of-work.component';
import { TermsConditionsComponent } from '../../components/terms-conditions/terms-conditions.component';
import { SignatoriesComponent } from '../../components/signatories/signatories.component';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDetailsComponent } from '../../dialogs/payment-details/payment-details.component';
import { MatButtonModule } from '@angular/material/button';
import {
  Control,
  FieldPath,
  form,
  validate,
  schema,
  applyWhen,
  required,
  applyEach,
  apply,
} from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {
  scopeOfWorkDeliverableSchema,
  scopeOfWorkSchema,
} from '../../components/scope-of-work/form.schema';

export interface ProjectOverviewFormModel {
  projectName: string;
  projectCode: string;
  startDate: Date;
  endDate: Date;
  projectLocation: string;
  projectDescription: string;
}

export interface ClientInformationFormModel {
  clientName: string;
  clientContact: string;
  clientEmail: string;
  clientAddress: string;
  clientPhone: string;
}

export interface ContractorInformationFormModel {
  contractorName: string;
  contractorLicenseNumber: string;
  contractorContact: string;
  contractorEmail: string;
  contractorAddress: string;
  contractorPhone: string;
}
export interface ScopeOfWorkDeliverable {
  name: string;
  description: string;
}

export interface ScopeOfWorkFormModel {
  scopeDescription: string;
  deliverables: ScopeOfWorkDeliverable[];
  milestones: {
    description: string;
    date: Date;
  }[];
}

export interface SpecialClausesFormModel {
  clauseTitle: string;
  clauseDescription: string;
}

export interface TermsConditionsFormModel {
  termsAccepted: boolean;
  confidentialityLevel: string;
  liabilityClauses: string;
  terminationClause: string;
  governingLaw: string;
  specialClauses: SpecialClausesFormModel[];
}

export interface SignatoryFormModel {
  signatoryName: string;
  signatoryContractor: string;
  signatoryDate: Date;
  signatorySignature: string; // This could be a base64 string or a URL to an image
}

export interface PaymentDetailsFormModel {
  totalAmount: number | null;
  currency: string;
  paymentSchedule: string; // e.g., "50% upfront, 50% upon completion"
  invoiceFrequency: string; // e.g., "Monthly", "Upon Milestone Completion"
}

export interface ContractFormModel {
  title: string;
  projectOverview: ProjectOverviewFormModel;
  clientInformation: ClientInformationFormModel;
  contractorInformation: ContractorInformationFormModel;
  scopeOfWork: ScopeOfWorkFormModel;
  termsConditions: TermsConditionsFormModel;
  signatory: SignatoryFormModel;
  paymentDetails: PaymentDetailsFormModel;
}

@Component({
  selector: 'app-contract-form',
  standalone: true,
  imports: [
    ProjectOverviewComponent,
    ClientInformationComponent,
    ContractorInformationComponent,
    ScopeOfWorkComponent,
    TermsConditionsComponent,
    SignatoriesComponent,
    Control,
    JsonPipe,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: './contract-form.component.html',
  styleUrl: './contract-form.component.scss',
})
export class ContractFormComponent {
  dialog = inject(MatDialog);

  sss = computed(() => this.myForm.scopeOfWork);

  formModel = signal<ContractFormModel>({
    title: '',
    projectOverview: {
      projectName: '',
      projectCode: '',
      startDate: new Date(),
      endDate: new Date(),
      projectLocation: '',
      projectDescription: '',
    },
    clientInformation: {
      clientName: '',
      clientContact: '',
      clientEmail: '',
      clientAddress: '',
      clientPhone: '',
    },
    contractorInformation: {
      contractorName: '',
      contractorLicenseNumber: '',
      contractorContact: '',
      contractorEmail: '',
      contractorAddress: '',
      contractorPhone: '',
    },
    scopeOfWork: {
      scopeDescription: '',
      deliverables: [],
      milestones: [],
    },
    termsConditions: {
      termsAccepted: false,
      confidentialityLevel: '',
      liabilityClauses: '',
      terminationClause: '',
      governingLaw: '',
      specialClauses: [],
    },
    signatory: {
      signatoryName: '',
      signatoryContractor: '',
      signatoryDate: new Date(),
      signatorySignature: '',
    },
    paymentDetails: {
      totalAmount: null,
      currency: '',
      paymentSchedule: '',
      invoiceFrequency: '',
    },
  });

  myForm = form<ContractFormModel>(this.formModel, (path) => {
    required(path.title);
    apply(path.scopeOfWork, scopeOfWorkSchema);
  });

  openPaymentDialog() {
    this.dialog.open(PaymentDetailsComponent);
  }

  submit() {
    console.log('Form Submitted', this.myForm().value());
  }
}
