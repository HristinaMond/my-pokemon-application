async function makeHttpRequest<T>(
    baseURL?: string,
    path?: string,
    options?: RequestInit,
): Promise<T> {
    const response = await fetch(`${baseURL}${path}`, { cache: 'no-store', ...options });
    const data = await response.text();

    if (!response.ok) {
        console.error('Request failed with status code', response.status);
    }

    return data ? JSON.parse(data) : (undefined as T);
}

export function getRequest<T>(baseURL?: string, path?: string, options?: RequestInit): Promise<T> {
    return makeHttpRequest<T>(baseURL, path, options);
}

export function postRequest<T>(
    baseURL: string,
    path: string,
    data: any,
    options?: RequestInit,
): Promise<T> {
    return makeHttpRequest<T>( baseURL, path, {
        method: 'POST',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
        body: JSON.stringify(data),
    });
}