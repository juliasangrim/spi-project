import * as React from 'react';
import GetTableClickableRow from './GetTableClickableRow';
import { Dependency, Version } from '../../../types/ApiTypes';

interface Props{
  dependencies: Dependency[];
  setDependencies: (dependencies: Dependency[]) => void;
}

function AddDependencies({
  dependencies, setDependencies,
}: Props) {
  return (
    <div className="edit-default-config__modal">
      a
    </div>
  );
}

export default AddDependencies;
