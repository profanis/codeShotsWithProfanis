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

export const scopeOfWorkDeliverableSchema = schema<ScopeOfWorkDeliverable>(
  (path: FieldPath<ScopeOfWorkDeliverable>) => {
    //required(path.name);
    applyWhen(
      path,
      (value) => !(value.value().description && value.value().name),
      (pathWhenTrue) => {
        required(pathWhenTrue.name);
        required(pathWhenTrue.description);
      },
    );
  },
);

export const scopeOfWorkSchema = schema<ScopeOfWorkFormModel>(
  (path: FieldPath<ScopeOfWorkFormModel>) => {
    required(path.scopeDescription);
    applyEach(path.deliverables, scopeOfWorkDeliverableSchema);
  },
);
