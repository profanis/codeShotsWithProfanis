import {
  schema,
  FieldPath,
  applyWhen,
  required,
  applyEach,
} from '@angular/forms/signals';
import {
  ScopeOfWorkDeliverable,
  ScopeOfWorkFormModel,
} from '../../pages/contract-form/contract-form.component';

const scopeOfWorkDeliverableSchema = schema<ScopeOfWorkDeliverable>(
  (path: FieldPath<ScopeOfWorkDeliverable>) => {
    //required(path.name);
    required(path.description, {
      when: (ctx) => ctx.valueOf(path.name).length > 0,
    });
  },
);

export const scopeOfWorkSchema = schema<ScopeOfWorkFormModel>(
  (path: FieldPath<ScopeOfWorkFormModel>) => {
    required(path.scopeDescription);
    applyEach(path.deliverables, scopeOfWorkDeliverableSchema);
  },
);
