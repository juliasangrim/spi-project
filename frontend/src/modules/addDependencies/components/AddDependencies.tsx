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

  const onChoseDependencyVersion = (version:string | null, versionType: VersionType) => {
    if (!dependency) return;
    const newDependecy = dependency;
    newDependecy.version = version;
    newDependecy.versionType = versionType;

    setDependencies([...dependencies, newDependecy]);
    setDependency(null);
    setModalState(false);
  };

  const onCancelSelectVerion = () => {
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
      onChoseDependencyVersion={onChoseDependencyVersion}
      onCancelSelectVerion={onCancelSelectVerion}
    />
  );
}

export default AddDependencies;
