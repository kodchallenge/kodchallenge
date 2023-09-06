import React from 'react'

const EditorLoading = () => {
    return (
        <div className="h-screen w-screen">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                <div className="text-primary mt-4">Editor hazırlanıyor...</div>
            </div>
        </div>
    )
}

export default EditorLoading