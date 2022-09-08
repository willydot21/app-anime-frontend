
import SettingsSection from "../settings-section";

const SettingsVideo = ({ usePlayerState }: {
  usePlayerState:[boolean, React.Dispatch<React.SetStateAction<boolean>>]
}) => {

  const [usePlayer, setUsePlayer] = usePlayerState;

  return (
    <SettingsSection name="Ajustes de video">
      <div className="form-check form-switch setting-link">
        <label className="form-check-label" htmlFor="use-player"> (REMOVE ADS COMING SOON) </label>
        <input className="form-check-input settings-checkbox" type="checkbox" id="use-player" onClick={() => setUsePlayer(!usePlayer)}/>
      </div>
    </SettingsSection>
  );
}

export default SettingsVideo;
