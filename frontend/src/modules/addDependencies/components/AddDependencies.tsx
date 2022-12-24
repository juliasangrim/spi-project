import * as React from 'react';
import FindDependencies from './FindDependencies';
import SetDependencyVersion from './SetDependencyVersion';
import { Dependency, VersionType } from '../../../types/ApiTypes';

interface Props{
  dependencies: Dependency[];
  setDependencies: (dependencies: Dependency[]) => void;
  setModalState: (isActive: boolean) => void;
}

function AddDependencies({
  dependencies, setDependencies, setModalState,
}: Props) {
  const [dependency, setDependency] = React.useState<Dependency | null>(null);

  const onChooseDependencyVersion = (version:string | null, versionType: VersionType) => {
    if (!dependency) return;
    const newDependency = dependency;
    newDependency.version = version;
    newDependency.versionType = versionType;

    setDependencies([...dependencies, newDependency]);
    setDependency(null);
    setModalState(false);
  };

  const onCancelSelectVersion = () => {
    setDependency(null);
  };
  if (!dependency) {
    return (
      <FindDependencies
        dependencies={dependencies}
        setDependency={setDependency}
      />
    );
  }
  return (
    <SetDependencyVersion
      dependency={dependency}
      onChooseDependencyVersion={onChooseDependencyVersion}
      onCancelSelectVersion={onCancelSelectVersion}
    />
  );
}

export default AddDependencies;
