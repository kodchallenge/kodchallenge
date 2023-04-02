export enum SolutionState {
    Success = "success",
    Failed = "failed",
    BuildError = "build-error",
    Timeout = "timeout"
}

export type SolutionStateInfo = { name: string, cn: string, description: string }
export const SolutionStateInfos: { [key in SolutionState]: SolutionStateInfo } = {
    [SolutionState.Success]: { name: "Başarılı", cn: "text-success", description: "Çözümünüz tüm testlerden başarılı bir şekilde geçti." },
    [SolutionState.Failed]: { name: "Başarısız", cn: "text-error", description: "Çözümünüz testlerden geçemedi." },
    [SolutionState.BuildError]: { name: "Build Hatası", cn: "text-error-content", description: "Çözümünüz derlenirken hata oluştu." },
    [SolutionState.Timeout]: { name: "Zaman Aşımı", cn: "text-warning", description: "Çözümünüz belirlenen sürede tamamlanamadı." },
}